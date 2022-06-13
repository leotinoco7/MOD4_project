import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const UserAdmin = createParamDecorator((_, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest();
  const user = request.user;

  if (!user.isAdmin) {
    throw new UnauthorizedException(
      'Seu perfil de usúario não é administrador. Somente administradores podem executar essa função.',
    );
  }
  delete user.password;

  return user;
});
