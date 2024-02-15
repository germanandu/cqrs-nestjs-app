import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetCustomerQuery } from './queries/impl/get-customer.query';
import { Customer } from './modules/customer.model';
import { DeleteCustomerDto } from './interfaces/delete-user-dto.interface';
import { DeleteCustomerCommand } from './commands/impl/delete-customer.command';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/delete')
  async killDragon(@Param('id') id: string, @Body() dto: DeleteCustomerDto) {
    return this.commandBus.execute(new DeleteCustomerCommand(id));
  }

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.queryBus.execute(new GetCustomerQuery());
  }
}
