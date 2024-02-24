import {
  Banner,
  Collection,
  CollectionResponse as CollectionResponse,
  MainShortcut,
} from "./models";

class ApiService {
  private baseUrl: string = "https://api.testvalley.kr";

  async get<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}${url}`, {
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      throw new Error(`API call failed with status ${response.status}`);
    }

    return await response.json();
  }

  async getBanners(): Promise<Banner[]> {
    return await this.get<Banner[]>("/main-banner/all");
  }

  async getMainShortcuts(): Promise<MainShortcut[]> {
    return await this.get<MainShortcut[]>("/main-shortcut/all");
  }

  async getCollections(): Promise<Collection[]> {
    let res = await this.get<CollectionResponse>(
      "/collections?prearrangedDiscount"
    );

    return res.items;
  }
}

//export object
export const apiService = new ApiService();
