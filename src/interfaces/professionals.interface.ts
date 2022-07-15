enum Access {
  master = "master",
  staff = "staff",
  operator = "operator",
}

enum Occupation {
  manager = "manager",
  secretary = "secretary",
  nurse = "nurse",
  nursing_technician = "nursing_technician",
}

interface IProfessionalCreate {
  full_name: string;
  email: string;
  password: string;
  access_level: Access;
  occupation: Occupation;
}

interface IProfessional
  extends Omit<IProfessionalCreate, "access_level" | "occupation"> {
  id?: string;
  access_level: string;
  occupation: string;
}

interface IProfessionalDisplay {
  full_name: string;
  email: string;
  access_level: string;
  occupation: string;
}

export { IProfessional, IProfessionalCreate, IProfessionalDisplay };
