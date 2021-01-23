interface InvoiceRow {
  id: string;
  description: string;
  unit: string;
  price: number;
  quantity: number;
}

interface Invoice {
  id: string;
  clientId: string;
  date: Date;
  items: InvoiceRow;
}
