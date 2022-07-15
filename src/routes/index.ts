import { Router } from "express";
<<<<<<< HEAD
import { patientsRouter } from "./patients";
=======
import { usersRouter } from "./users";
import { seatsRouter } from "./seats";
>>>>>>> 33fe6e41a3a1b362c206e0581dac6829679bba2b

const router = Router();

router.use("/users", usersRouter);
<<<<<<< HEAD
router.use("/patients", patientsRouter);
=======
router.use("/seats", seatsRouter);
>>>>>>> 33fe6e41a3a1b362c206e0581dac6829679bba2b

export default router;
