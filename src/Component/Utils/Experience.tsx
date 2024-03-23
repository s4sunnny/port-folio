const Experience = function () {
  const start = new Date(2021, 2, 10);
  const end = new Date();
  let months;
  months = (end.getFullYear() - start.getFullYear()) * 12;
  months -= start.getMonth();
  months += end.getMonth();
  months = months <= 0 ? 0 : months;

  const years = Math.trunc(months / 12);
  const additMonths = months % 12;
  return years + `.` + additMonths;
};

export default Experience;
