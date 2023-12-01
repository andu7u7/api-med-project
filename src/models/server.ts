import express, { Request, Response } from "express";
import medRoutes from "../routes/medicamento";
import cors from "cors";

class Server {
  private app: express.Application;
  private port: string;
  private apiPaths = {
    medicamentos: "/api/medicamentos",
  };

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "8000";
    this.middlewares();
    this.routes();
  }

  middlewares(): void {
    this.app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE" }));
    this.app.use(express.json());
  }

  routes(): void {
    this.app.use(this.apiPaths.medicamentos, medRoutes);
    this.app.use((req: Request, res: Response) => {
      res.status(404).json({ message: "Ruta no encontrada" });
    });
  }

  listen(): void {
    this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }
}

export default Server;
