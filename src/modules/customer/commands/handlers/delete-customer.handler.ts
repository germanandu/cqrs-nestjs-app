import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CustomerRepository } from '../../repository/customer.repository';
import { DeleteCustomerCommand } from '../impl/delete-customer.command';

@CommandHandler(DeleteCustomerCommand)
export class DeleteCustomerHandler implements ICommandHandler<DeleteCustomerCommand> {
  constructor(
    private readonly repository: CustomerRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteCustomerCommand) {
    console.log('DeleteCustomerCommand...');

    const { customerId } = command;
    const customer = this.publisher.mergeObjectContext(
      await this.repository.findOneById(customerId),
    );
    customer.deleteCustomer();
    customer.commit();
  }
}
