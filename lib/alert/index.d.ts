import React from 'react';
export interface AlertProps {
    /**
     * @description       Alert 的类型
     * @default           'info'
     */
    kind?: 'info' | 'positive' | 'negative' | 'warning';
    children?: string;
}
export type KindMap = Record<Required<AlertProps>['kind'], string>;
declare const Alert: React.FC<AlertProps>;
export default Alert;
