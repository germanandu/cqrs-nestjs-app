import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CustomerController } from './customer.controller';
import { CustomerRepository } from './repository/customer.repository';
import { DeleteCustomerHandler } from './commands/handlers/delete-customer.handler';
import { GetCustomersHandler } from './queries/handlers/get-customer.handler';

@Module({
  imports: [CqrsModule],
  controllers: [CustomerController],
  providers: [
    CustomerRepository,
    DeleteCustomerHandler,
    GetCustomersHandler,
  ],
})
export class CustomerModule {}
