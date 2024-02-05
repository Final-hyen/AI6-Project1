export const ChangeDate = (orders) => {
  orders.map((order) => {
    if (order["create_at"].includes("년")) {
      return order;
    } else {
      const dateString = new Date(order["create_at"]);
      const year = new Intl.DateTimeFormat("ko-kr", { year: "numeric" }).format(
        dateString
      );
      const month = new Intl.DateTimeFormat("ko-kr", {
        month: "2-digit",
      }).format(dateString);
      const day = new Intl.DateTimeFormat("ko-kr", { day: "2-digit" }).format(
        dateString
      );
      const koDate = `${year} ${month} ${day}`;
      order["create_at"] = koDate;
    }
    return order;
  });
};
