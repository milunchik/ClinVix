import { DoctorDTO } from "../entity/dtos/doctor.profile";
import { Doctor } from "../entity/Doctor";
import { AppDataSource } from "../utils/data-source";
import { Request, Response } from "express";

const doctorRepository = AppDataSource.getRepository(Doctor);

export class DoctorControllers {
  editProfile = async (req: Request, res: Response) => {
    try {
      const {
        email,
        fullname,
        phone_number,
        speciality,
        description,
      }: DoctorDTO = req.body;
      let image;

      const doctor = await doctorRepository.findOne({ where: { email } });

      if (!doctor) {
        throw new Error("User not found");
      }

      if (req.file) {
        image = req.file.path.replace(/\\/g, "/");
      }

      const updateProfile = await doctorRepository.update(
        { email: email },
        {
          fullname: fullname,
          phone_number: phone_number,
          speciality: speciality,
          description: description,
          image: image,
        }
      );

      res.status(201).json({ message: "Updated" });
    } catch (err) {
      console.log(err);
    }
  };

  allDoctors = async (req: Request, res: Response) => {
    const doctors = await doctorRepository.find();

    return res.status(200).json(doctors);
  };

  doctorById = async (req: Request, res: Response) => {
    try {
      const id = parseInt(req.params.id);

      const doctor = await doctorRepository.findOneBy({ id });

      if (!doctor) {
        return res.status(404).json({ message: "Doctor not found" });
      }

      res.status(200).json(doctor);
    } catch (err) {
      console.log(err);
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      let doctorId = parseInt(id);

      const user = await doctorRepository.findOne({ where: { id: doctorId } });

      if (!user) {
        return res.status(404).json({ message: "User not found!" });
      }

      await doctorRepository.delete(doctorId);
      return res.status(200).json({ message: "Deleted" });
    } catch (err) {
      console.log(err);
    }
  };
}
