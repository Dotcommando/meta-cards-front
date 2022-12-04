export function statusIsNotOk(status: number): boolean {
  const statusNumber = Number(status);

  return statusNumber > 299 || statusNumber < 200;
}
