import { ActionType } from 'angular-cesium';

export interface AcNotification {
  id: string;
    actionType: ActionType;
    entity?: any;
}
