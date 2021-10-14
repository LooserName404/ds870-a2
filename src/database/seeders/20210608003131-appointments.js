"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Appointments", [
      {
        physicianId: 1,
        patientId: 6,
        appointmentDate: new Date(2021, 5, 9, 7, 30, 0),
        description:
          "Nullam egestas libero gravida, luctus massa a, ornare metus. Sed laoreet lobortis ex. Praesent rutrum lacinia justo, ac commodo quam. Donec tempus congue orci vitae sodales. Maecenas blandit ut dui.",
      },
      {
        physicianId: 1,
        patientId: 5,
        appointmentDate: new Date(2021, 5, 9, 8, 30, 0),
        description:
          "Fusce nec luctus augue. Curabitur vel pharetra diam, in blandit libero. Mauris in gravida quam, in vulputate sapien. Duis ut sodales nisi. Ut lacinia ultrices pretium. Phasellus posuere libero luctus.",
      },
      {
        physicianId: 2,
        patientId: 4,
        appointmentDate: new Date(2021, 5, 10, 7, 30, 0),
        description:
          "Donec imperdiet facilisis iaculis. Mauris lacinia purus a vulputate rutrum. Integer fermentum elementum magna, sed ultricies metus mattis nec. Fusce malesuada dictum mauris, ut egestas justo scelerisque sed. Pellentesque habitant.",
      },
      {
        physicianId: 2,
        patientId: 3,
        appointmentDate: new Date(2021, 5, 11, 7, 30, 0),
        description:
          "Proin laoreet a massa quis rhoncus. Sed euismod gravida mi vitae tristique. Aenean ullamcorper nisl id urna faucibus, sit amet ultrices nisl faucibus. In porttitor condimentum semper. Nulla facilisi. Fusce.",
      },
      {
        physicianId: 3,
        patientId: 2,
        appointmentDate: new Date(2021, 5, 11, 8, 50, 0),
        description:
          "Integer eu erat luctus, tempor risus ut, maximus turpis. Etiam varius urna id ante porttitor, at imperdiet odio interdum. Mauris dictum, ipsum eu consectetur porttitor, nunc neque varius nulla, non.",
      },
      {
        physicianId: 3,
        patientId: 1,
        appointmentDate: new Date(2021, 5, 12, 8, 45, 0),
        description:
          "Morbi faucibus ultricies tellus et semper. Sed feugiat porttitor euismod. Suspendisse ut eros maximus, consectetur nisl nec, hendrerit neque. Morbi rhoncus nunc vitae neque dignissim aliquet. Cras nec purus sem.",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Appointments", null, {});
  },
};
