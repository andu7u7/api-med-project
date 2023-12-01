import { Request, Response } from "express";
import medicamentos from "../data/medicamentos.json";

export const getAll = (req: Request, res: Response) => {
  const name = req.query.name;
  if (!name) {
    res.json({ total: medicamentos.length, medicamentos });
  } else {
    const medicamento = medicamentos.find((med) =>
      med.name
        .toLocaleLowerCase()
        .includes((name as string).toLocaleLowerCase())
    );
    if (!medicamento)
      res.status(404).json({ message: "Medicamento no encontrado" });
    else res.json({ ...medicamento });
  }
};
