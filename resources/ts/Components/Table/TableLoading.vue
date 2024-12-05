<template>
    <div class="p-5">
      <!-- Search and Action Buttons -->
      <div class="grid grid-cols-1 gap-5 mb-5 xl:grid-cols-2">
          <div>
            <div class="relative xl:w-3/6">
              <div class="h-10 bg-zink-100 animate-pulse rounded"></div>
              <div
                class="absolute left-2.5 top-2.5 h-4 w-4 bg-zink-100 animate-pulse rounded-full"
              ></div>
            </div>
          </div>
          <div class="flex gap-2 ltr:md:justify-end rtl:md:justify-start">
            <div class="h-10 w-32 bg-zink-100 animate-pulse rounded"></div>
            <div class="h-10 w-10 bg-zink-100 animate-pulse rounded-full"></div>
          </div>
        </div>


      <!-- Table Skeleton -->
      <table class="w-full">
        <thead class="ltr:text-left rtl:text-right">
          <tr>
            <th class="px-3.5 py-2.5 font-semibold">
              <div class="h-4 w-32 bg-zink-100 animate-pulse rounded"></div>
            </th>
            <th class="px-3.5 py-2.5 font-semibold">
              <div class="h-4 w-32 bg-zink-100 animate-pulse rounded"></div>
            </th>
            <th class="px-3.5 py-2.5 font-semibold">
              <div class="h-4 w-32 bg-zink-100 animate-pulse rounded"></div>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- Skeleton Rows -->
          <tr>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
          </tr>
          <tr>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
          </tr>
          <tr>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
            <td class="px-3.5 py-2.5">
              <div class="h-8 bg-zink-100 animate-pulse rounded"></div>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Pagination -->
      <div class="flex justify-end mt-4">
        <div class="flex gap-2 pagination-wrap">
          <a
            class="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 disabled:text-slate-400 dark:disabled:text-zink-300 cursor-auto"
            href="#"
            disabled
          >
            Previous
          </a>
          <ul class="flex gap-2 mb-0 pagination listjs-pagination">
            <li class="h-8 w-8 bg-zink-100 animate-pulse rounded"></li>
            <li class="h-8 w-8 bg-zink-100 animate-pulse rounded"></li>
            <li class="h-8 w-8 bg-zink-100 animate-pulse rounded"></li>
          </ul>
          <a
            class="inline-flex items-center justify-center bg-white dark:bg-zink-700 h-8 px-3 transition-all duration-150 ease-linear border rounded border-slate-200 dark:border-zink-500 text-slate-500 dark:text-zink-200 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-50 dark:hover:bg-custom-500/10 focus:bg-custom-50 dark:focus:bg-custom-500/10 focus:text-custom-500 dark:focus:text-custom-500 disabled:text-slate-400 dark:disabled:text-zink-300 cursor-auto"
            href="#"
            disabled
          >
            Next
          </a>
        </div>
      </div>
    </div>
  </template>
