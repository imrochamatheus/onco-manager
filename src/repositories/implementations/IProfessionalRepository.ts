import {
  IProfessionalCreate,
  IProfessionalDisplay,
} from "../../interfaces/professionals.interface";

interface IProfessionalRepository {
  create({ full_name, email, password, access_level, occupation }: IProfessionalCreate): Promise<IProfessionalDisplay>; 
}

export {IProfessionalRepository}
