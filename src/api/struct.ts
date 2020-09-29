export enum InTicketPool {
  No,
  Yes,
}

export interface IGetTicketList {
  EndTime?: number;
  StartTime?: number;
  InTicketPool?: InTicketPool;
  Limit?: number;
  Offset?: number;
  Operator?: string;
  Creator?: string;
  Receiver?: string;
  Status?: number;
  TicketType?: number;
}

export interface IGetTicketListResponse {
  Data: ITicket[];
}

export interface ITicket {
  CompanyName: string;
  Config: [];
  DemandType: string;
  Id: number;
  InTicketPool: number;
  LastOperator: string;
  Receiver: string;
  Remark: string;
  Solution: string;
  Source: string;
  Status: number;
  SubDemandType: string;
  TicketType: number;
  Title: string;
  TransferReceiver: string;
}
