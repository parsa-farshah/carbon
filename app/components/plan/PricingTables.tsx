"use client";

import { Check, X } from "lucide-react";
import type { FeatureCategory } from "./pricing-data";

function renderCell(value: string | boolean) {
  if (value === true) {
    return (
      <Check className="w-5 h-5 text-green-600 dark:text-green-400 mx-auto" />
    );
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-500 mx-auto" />;
  }
  return <span className="text-sm text-foreground">{value}</span>;
}

interface PricingTablesProps {
  categories: FeatureCategory[];
  billingCycle: "monthly" | "annual";
}

export function PricingTables({
  categories,
  billingCycle,
}: PricingTablesProps) {
  return (
    <div className="space-y-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="bg-primary/10 px-6 py-4 border-b">
            <h2 className="text-lg font-bold text-primary">
              {index + 1}. {category.title}
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table
              className="w-full min-w-[1000px] divide-y divide-border"
              aria-label={`جدول ${category.title}`}
              role="table"
            >
              <thead className="bg-muted/30">
                <tr>
                  <th className="sticky right-0 z-20 bg-card/95 backdrop-blur-sm px-4 py-3 text-right text-sm font-semibold min-w-[140px] md:min-w-[160px] text-foreground shadow-md border-l border-border/50">
                    ماژول / قابلیت
                  </th>
                  <th className="px-4 py-3 text-right text-sm font-semibold min-w-[220px]">
                    توضیحات ماژول
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold w-[150px] bg-background/50">
                    <div className="flex flex-col gap-0.5">
                      <span>پلن پایه</span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {billingCycle === "monthly"
                          ? "۴۵۰ هزار ت"
                          : "۲۷۰ هزار ت"}
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold w-[150px] bg-primary/5">
                    <div className="flex flex-col gap-0.5">
                      <span>پلن بیزینس</span>
                      <span className="text-xs font-normal text-muted-foreground">
                        {billingCycle === "monthly"
                          ? "۱٫۲ میلیون ت"
                          : "۷۲۰ هزار ت"}
                      </span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold w-[150px] bg-gradient-to-br from-amber-500/10 to-yellow-500/10">
                    <div className="flex flex-col gap-0.5">
                      <span>پلن اینترپرایز</span>
                      <span className="text-xs font-normal text-muted-foreground">
                        تماس بگیرید
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                {category.rows.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-muted/10 transition-colors"
                  >
                    <td className="sticky right-0 z-20 bg-card/95 backdrop-blur-sm px-4 py-3 text-sm font-medium shadow-md border-l border-border/50">
                      {row.module}
                    </td>
                    <td className="px-4 py-3 text-sm text-muted-foreground">
                      {row.description}
                    </td>
                    <td className="px-4 py-3 text-center">
                      {renderCell(row.basic)}
                    </td>
                    <td className="px-4 py-3 text-center bg-primary/5">
                      {renderCell(row.business)}
                    </td>
                    <td className="px-4 py-3 text-center bg-gradient-to-br from-amber-500/10 to-yellow-500/10">
                      {renderCell(row.enterprise)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {index < categories.length - 1 && (
            <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          )}
        </div>
      ))}
    </div>
  );
}
