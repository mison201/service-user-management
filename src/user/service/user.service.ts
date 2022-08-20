import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { JwtService } from './jwt.service';
import { ValidateResponse } from 'src/pb/user.pb';

@Injectable()
export class UserService {
  @Inject(JwtService)
  private readonly jwtService: JwtService;

  public async validate({ token }: any): Promise<ValidateResponse> {
    const decoded = await this.jwtService.verify(token);
    if (!decoded) {
      return { status: HttpStatus.FORBIDDEN, error: ['Token is invalid'], userId: null };
    }

    return { status: HttpStatus.OK, error: null, userId: decoded.id };
  }
}
