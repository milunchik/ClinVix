import { Router } from "express";
import { SurveyController } from "../controllers/survey.controller";

const SurveyRouter = Router();
const surveyController = new SurveyController();

SurveyRouter.post("/survey", surveyController.createSurvey);
SurveyRouter.get("/surveys", surveyController.allSurevies);
SurveyRouter.get("/usersSurvey", surveyController.usersSurveys);
SurveyRouter.get("/survey/:id", surveyController.surveyById);
SurveyRouter.put("/survey/:id", surveyController.update);
SurveyRouter.delete("/survey/:id", surveyController.delete);

SurveyRouter.get("/timetable", surveyController.getTimetable);

export default SurveyRouter;
