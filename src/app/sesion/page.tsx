'use client';

import { SesionFormPageParams } from "@/domain/models";
import { SesionFormPage } from "@/presentation/pages";
import { useState } from "react";

export default function Sesion() {
  const [username, setUser] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (value: string, key: SesionFormPageParams) => {
    console.log({ value, key });
    if (key === SesionFormPageParams.username) setUser(value);
    else if (key === SesionFormPageParams.password) setPassword(value);
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('enviar...');
  }
  return <SesionFormPage
  username={username}
  password={password}
  handleSubmit={handleSubmit}
    handleChange={handleChange}
  />
}