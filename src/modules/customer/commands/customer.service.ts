import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { DeleteCustomerCommand } from "./impl/delete-customer.command";

@Injectable()
export class CustomerService {
  constructor(private commandBus: CommandBus) {}

  async deleteCustomer(customerId: string) {
    return this.commandBus.execute(
      new DeleteCustomerCommand(customerId)
    );
  }
}