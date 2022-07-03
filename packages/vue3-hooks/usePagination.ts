import { Ref, ref, toRaw } from "vue";
import { noop } from "@xieyezi/utils";
import { useClearObject } from "./useClearObject";

interface IPagination {
  page: number;
  pageSize: number;
}

interface QueryParams {
  [key: string]: any;
}

type returned = {
  page: Ref<number>;
  pageSize: Ref<number>;
  defaultPageOptions: IPagination;
  defaultPageSizeOptions: string[];
  setQueryParams: (params: QueryParams) => void;
  setPagination: (pageOptions: IPagination) => void;
};

const defaultPageOptions: IPagination = {
  page: 1,
  pageSize: 15
};

const defaultPageSizeOptions = ["15", "20", "30", "50"];

/**
 *
 * @param fetch 请求函数
 * @param initPageOptions 初始化分页参数
 */
export function usePagination(fetch: (T?) => void = noop, initPageOptions: IPagination = defaultPageOptions): returned {
  const queryParams = ref<QueryParams>({});
  const page = ref(initPageOptions.page);
  const pageSize = ref(initPageOptions.pageSize);

  function setPagination(pageOptions: IPagination) {
    page.value = pageOptions.page;
    if (pageOptions.pageSize) {
      // 判断pageSize是否变更，若变更，从第一页开始请求
      if (pageOptions.pageSize !== pageSize.value) {
        page.value = 1;
      }
      pageSize.value = pageOptions.pageSize;
    }

    fetch({
      ...useClearObject(toRaw(queryParams.value)),
      page: page.value,
      pageSize: pageSize.value
    });
  }

  function setQueryParams(params: QueryParams) {
    queryParams.value = params;
    page.value = defaultPageOptions.page;

    fetch({
      ...useClearObject(params),
      page: page.value,
      pageSize: pageSize.value
    });
  }

  return { page, pageSize, defaultPageOptions, defaultPageSizeOptions, setPagination, setQueryParams };
}
