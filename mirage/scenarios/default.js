export default function(server) {

  ['Bouldering', 'Sport Climbing'].forEach((style) => {
    server.create('style', { name: style });
  });

  ['V15', '16'].forEach((grade) => {
    server.create('grade', { name: grade });
  });

  let climbs = server.createList('climb', 10);
  climbs.forEach((climb) => {
    climb.styleId = server.db.styles[1].id;
    climb.gradeId = server.db.grades[0].id;
    climb.save();
  });

  climbs = server.createList('climb', 10);
  climbs.forEach((climb) => {
    climb.styleId = server.db.styles[0].id;
    climb.gradeId = server.db.grades[0].id;
    climb.save();
  });

  server.createList('climber', 100);
  server.createList('area', 50);
}
