import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../../interfaces/professionals.interface";

interface IProfessionalRepository {
  create(professionalData: IProfessionalCreate): Promise<IProfessionalDisplay>;
  listAllProfessional(): Promise<IProfessionalDisplay[]>;
  getProfessionalById(id: string): Promise<IProfessionalDisplay | null>;
}

export { IProfessionalRepository };
