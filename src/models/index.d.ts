import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE"
}



type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly basicInfos?: BasicInfos | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBasicInfosId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly basicInfos: AsyncItem<BasicInfos | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userBasicInfosId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerBasicInfos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasicInfos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasicInfos = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasicInfos, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gender?: Gender | keyof typeof Gender | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BasicInfos = LazyLoading extends LazyLoadingDisabled ? EagerBasicInfos : LazyBasicInfos

export declare const BasicInfos: (new (init: ModelInit<BasicInfos>) => BasicInfos) & {
  copyOf(source: BasicInfos, mutator: (draft: MutableModel<BasicInfos>) => MutableModel<BasicInfos> | void): BasicInfos;
}