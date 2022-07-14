interface ISeatCreate {
  seat_number: number;
}

interface ISeat extends ISeatCreate{
  id: number;
}


export { ISeatCreate, ISeat }