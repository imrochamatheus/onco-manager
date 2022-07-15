interface ISeatCreate {
  seat_number: number;
}

interface ISeat extends ISeatCreate {
  id: number;
}

interface ISeatId {
  seat_id: number;
}

export { ISeatCreate, ISeat, ISeatId };
