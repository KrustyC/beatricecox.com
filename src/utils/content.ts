export function isDescriptionEmpty(description: string | undefined | null) {
  if (!description) {
    return true;
  }

  return description === "<p><br></p>" || description === "<p></p>";
}
