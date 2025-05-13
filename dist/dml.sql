-- Inserts de usuarios
		INSERT INTO users(first_name, last_name, email, password, birth_date, phone)
			 VALUES ("Thalisson", "Douglas", "talison@gmail.com", "$2b$10$f9CubDckuNZf4seFXwjCzuMEGKUMuC.4LdRd/6vT/SMFvNcFvKMSi", "2000-12-12", "14123456789");
             
		INSERT INTO users(first_name, last_name, email, password, birth_date, phone)
			 VALUES ("Jamal", "Ball", "jamalballs@gmail.com", "$2b$10$f9CubDckuNZf4seFXwjCzuMEGKUMuC.4LdRd/6vT/SMFvNcFvKMSi", "2000-12-12", "14123456789");
             
		INSERT INTO users(first_name, last_name, email, password, birth_date, phone)
			 VALUES ("Proboscious", "Monkey", "mcaocnarigudo@gmail.com", "$2b$10$f9CubDckuNZf4seFXwjCzuMEGKUMuC.4LdRd/6vT/SMFvNcFvKMSi", "2000-12-12", "14123456789");

-- Inserts de brinquedos
		INSERT INTO rides(name, waiting_time, status, area)
			 VALUES ("Montanha Russa", 5, "Em funcionamento", "A");
             
		INSERT INTO rides(name, waiting_time, status, area)
			 VALUES ("Roda Gigante", 7, "Em funcionamento", "B");
             
		INSERT INTO rides(name, waiting_time, status, area)
			 VALUES ("Kamikaze", 2, "Em funcionamento", "C");

-- Insert de filas
		INSERT INTO hopi_hari_db.lines(id_ride, id_user)
			 VALUES (8, 3);
		INSERT INTO hopi_hari_db.lines(id_ride, id_user)
			 VALUES (8, 4);
             
		INSERT INTO hopi_hari_db.lines(id_ride, id_user)
			 VALUES (9, 3);
		INSERT INTO hopi_hari_db.lines(id_ride, id_user)
			 VALUES (9, 5);
             
		INSERT INTO hopi_hari_db.lines(id_ride, id_user)
			 VALUES (10, 4);
		INSERT INTO hopi_hari_db.lines(id_ride, id_user)
			 VALUES (10, 5);

-- Select com INNER JOIN
		SELECT users.first_name,
			   id_user,
               id_ride,
               rides.name
		  FROM `lines`
	INNER JOIN users ON `lines`.id_user = users.id
    INNER JOIN rides ON `lines`.id_ride = rides.id
		 WHERE `lines`.id_ride = 8;