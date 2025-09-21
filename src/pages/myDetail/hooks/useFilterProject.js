import { useEffect, useState } from "react";

export default function usefilterProject(query) {
  const [selectedFilter, setSelectedFilter] = useState();
  const [filterParam, setFilterParam] = useState({ value: "", id: "" });
  useEffect(() => {
    const filterParametr = query.get("project");
    if (filterParametr === "active") {
      setSelectedFilter("active");
      setFilterParam({ value: true, id: "status" });
    } else if (filterParametr === "inactive") {
      setSelectedFilter("inactive");
      setFilterParam({ value: false, id: "status" });
    } else setFilterParam({ value: null, id: null });
  }, [selectedFilter]);
  return { setSelectedFilter, filterParam, selectedFilter };
}
