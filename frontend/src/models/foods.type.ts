export interface ApiFoods {
  Options: {
    msg: string;
    status: number;
    foodsRetrieved: [ApiFood];
  };
}

export interface ApiFood {
  id: number | string;
  option_name: string;
  estimated_time: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiCreateFood {
  foodToCreate: {
    msg: string;
    status: number;
    foodCreated: ApiFood;
  };
}

export interface Food {
  foodId: number | string;
  optionName: string;
  estimatedTime: number;
}

export const FoodsEmptyState: Food[] = [];
