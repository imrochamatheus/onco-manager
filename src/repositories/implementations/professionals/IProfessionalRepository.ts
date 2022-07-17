import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../../interfaces/professionals.interface";

interface IProfessionalRepository {
  create(professionalData: IProfessionalCreate): Promise<IProfessionalDisplay>;
  updateProfessional(id: string, data: IProfessionalCreate): Promise<void>;
  getProfessionalById(id: string): Promise<IProfessionalDisplay | null>;
  listAllProfessional(): Promise<IProfessionalDisplay[]>;
}

export { IProfessionalRepository };
