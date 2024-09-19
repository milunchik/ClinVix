import { Doctor } from "../entity/Doctor";
import { SurveyDTO } from "../entity/dtos/survey";
import { Survey } from "../entity/Survey";
import { User } from "../entity/User";
import { AppDataSource } from "../utils/data-source";
import { Request, Response } from "express";

const surveyRepository = AppDataSource.getRepository(Survey);
const userRepository = AppDataSource.getRepository(User);
const doctorReposirtory = AppDataSource.getRepository(Doctor);

export class SurveyController {
  createSurvey = async (req: Request, res: Response) => {
    try {
      if (!req.session) {
        return res.status(404).json({ message: "User not authorizated" });
      }

      const userId = parseInt(req.session.userId);

      const user = await userRepository.findOneBy({ id: userId });

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      const {
        email,
        fullname,
        phone_number,
        age,
        date,
        time,
        symptoms,
      }: SurveyDTO = req.body;

      const doctor_name = req.body.doctor;

      const doctor = await doctorReposirtory.findOne({
        where: { fullname: doctor_name },
      });

      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }

      const survey = surveyRepository.create({
        user,
        email,
        fullname,
        phone_number,
        age,
        doctor,
        date,
        time,
        symptoms,
      });

      await surveyRepository.save(survey);

      return res.status(201).json(survey);
    } catch (err) {
      console.log(err);
    }
  };

  allSurevies = async (req: Request, res: Response) => {
    try {
      const surveys = await surveyRepository.find();

      return res.status(200).json(surveys);
    } catch (err) {
      console.log(err);
    }
  };

  getTimetable = async (req: Request, res: Response) => {
    try {
      const surveys = await surveyRepository.find();

      let timetable = [];

      for (let i = 0; i < surveys.length; i++) {
        timetable.push({
          id: surveys[i].id,
          fullname: surveys[i].fullname,
          date: surveys[i].date,
          time: surveys[i].time,
        });
      }

      return res.status(200).json({ timetable });
    } catch (err) {
      console.log(err);
    }
  };

  usersSurveys = async (req: Request, res: Response) => {
    try {
      if (req.session) {
        const userId = parseInt(req.session.userId);

        const surveys = await surveyRepository.findBy({ user: { id: userId } });

        return res.status(200).json(surveys);
      } else {
        return res.status(404).json({ message: "Unauthorizate user" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  surveyById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      const survey = await surveyRepository.findOneBy({ id });

      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }

      return res.status(200).json(survey);
    } catch (err) {
      console.log(err);
    }
  };

  update = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      const { email, fullname, phone_number, age, date, time, symptoms } =
        req.body;

      const survey = await surveyRepository.findOneBy({ id: id });

      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }

      const updatedSurvey = await surveyRepository.update(
        { id: id },
        { email, fullname, phone_number, age, date, time, symptoms }
      );

      await surveyRepository.save(survey);

      return res.status(200).json({ message: "Updated", updatedSurvey });
    } catch (err) {
      console.log(err);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      const survey = await surveyRepository.findOne({
        where: { id },
        relations: ["user"],
      });

      if (!survey) {
        return res.status(404).json({ message: "Survey not found" });
      }

      await surveyRepository.delete(id);

      return res.status(200).json({ message: "Deleted" });
    } catch (err) {
      console.log(err);
    }
  };
}
