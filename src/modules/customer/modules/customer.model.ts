import { AggregateRoot } from '@nestjs/cqrs';
import { DeletedCustomerEvent } from '../events/impl/deleted-customer.event';

export class Customer extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  deleteCustomer() {
    this.apply(new DeletedCustomerEvent(this.id));
  }

}
