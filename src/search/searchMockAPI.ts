import mockData, {ISearcResultDataType} from "./mockData";

export function searchResultMockAPI() {
  return new Promise<ISearcResultDataType>((resolve) => setTimeout(() => resolve(mockData), 1500));
}
