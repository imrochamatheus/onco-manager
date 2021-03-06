import {
  IProfessionalCreate,
  IProfessionalCredentials,
  IProfessionalDisplay,
} from "../../../interfaces/professionals.interface";

interface IProfessionalRepository {
  create(professionalData: IProfessionalCreate): Promise<IProfessionalDisplay>;
  updateProfessional(id: string, data: IProfessionalCreate): Promise<void>;
  getProfessionalById(id: string): Promise<IProfessionalDisplay | null>;
  listAllProfessional(): Promise<IProfessionalDisplay[]>;
  deleteProfessional(id: string): Promise<void>;
  getProfessionalByEmail(
    email: string
  ): Promise<IProfessionalCredentials | null>;
}

export { IProfessionalRepository };
