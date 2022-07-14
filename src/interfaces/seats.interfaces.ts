interface ISeatCreate {
  seat_number: number;
}

interface ISeatCreateResp extends ISeatCreate{
  id: number;
}


export { ISeatCreate, ISeatCreateResp }