import { Request, Response } from "express";

export class DepartmentsController {
  addDepartment() {
    const locations = [];
    const numberOfLocations = 50;

    for (let i = 0; i < numberOfLocations; i++) {
      const lat = this.randomLatitude();
      const lng = this.randomLongitude();

      locations.push({ lat, lng });
    }

    return locations;
  }

  randomLatitude(): number {
    return Math.random() * 180 - 90;
  }

  randomLongitude(): number {
    return Math.random() * 360 - 180;
  }

  getDepartments = async (req: Request, res: Response) => {
    let departments = this.addDepartment();

    res.status(200).json(departments);
  };
}
