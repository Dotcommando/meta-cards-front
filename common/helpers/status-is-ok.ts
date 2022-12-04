export function statusIsOk(status: number): boolean {
  const statusNumber = Number(status);

  return statusNumber > 199 && statusNumber < 300;
}
