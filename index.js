function superbowlWin(record) {
  const result = record.find(object => object.result === "W");
  return !!result ? result.year : undefined;
}
