import { startupDomain } from '../generated/startup.domain';

export class StartupsService {
  getStartupProfile() {
    return startupDomain;
  }
}
