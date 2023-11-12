
export enum SesionFormPageParams {
  username = 'username',
  password = 'password',
}

export interface SesionFormPageProps {
  handleSubmit: (e: any) => void;
  username?: string;
  password?: string;
  handleChange: (value: string, key: SesionFormPageParams) => void;
}