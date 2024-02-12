--Set parameters

-- Filling part table
INSERT INTO part(P_PARTKEY,P_NAME,P_MFGR,P_BRAND,P_TYPE,P_SIZE,P_CONTAINER,P_RETAILPRICE,P_COMMENT) VALUES
    ('06', 'Adidas Superstas','Adidas','Adidas','Sport','42','shoebox', '49.99', 'Plastic on the front'),
    ('07', 'Adidas Stan Smith','Adidas', 'Adidas', 'Tennis', '49', 'shoebox', '69.69', 'Co-feature with Stan Smith'),
    ('08', 'Adidas Originals Gazelle', 'Adidas', 'Adidas', 'Retros', '23', 'shoebox', '29.99', 'For the old classics'),
    ('09', 'Adidas NMD', 'Adidas', 'Adidas', 'Modern', '40', 'shoebox', '49.49', 'New technologies for supressing sound'),
    ('10', 'Adidas Samba', 'Adidas', 'Adidas', 'Football', '43', 'shoebox', '64.99', 'For football player'),
    ('11', 'Nike Air Max', 'Nike', 'Nike', 'Running', '45', 'shoebox', '89.99', 'Max comfort for running'),
    ('12', 'Nike Blazer', 'Nike', 'Nike', 'Basketball', '40', 'shoebox', '79.99', 'Classic basketball style'),
    ('13', 'Puma RS-X', 'Puma', 'Puma', 'Casual', '38', 'shoebox', '59.99', 'Retro design with modern comfort'),
    ('14', 'New Balance 990', 'New', 'New', 'Athletic', '42', 'shoebox', '129.99', 'Premium running shoes'),
    ('15', 'Reebok Classic Leather', 'Reebok', 'Reebok', 'Classic', '41', 'shoebox', '54.99', 'Timeless and versatile');

-- Filling region table
INSERT INTO region(R_REGIONKEY,R_NAME,R_COMMENT) VALUES
    ('1', 'Europa', ' '),
    ('2', 'Asian', 'Sea'),
    ('3', 'Africa', 'West side story'),
    ('4', 'Nord America', ''),
    ('5','South America', '');

-- Filling nation table
INSERT INTO nation(N_NATIONKEY,N_NAME,N_REGIONKEY,N_COMMENT) VALUES
    ('10', 'Germany', '1', ' '),
    ('9', 'France', '2', ' '),
    ('8', 'USA', '3', ' '),
    ('7', 'Canadian', '4', ' '),
    ('6', 'Russia', '5',' ');

-- Filling supplier table
INSERT INTO supplier(S_SUPPKEY, S_NAME, S_ADDRESS, S_NATIONKEY, S_PHONE, S_ACCTBAL, S_COMMENT) VALUES
    ('1', 'FashionFabrics', '123 Textile Avenue', '7', '555-123-4567', '10000.50', 'Main supplier of fabrics and materials'),
    ('2', 'ShoeMakers Inc.', '456 Shoe Street', '6', '555-234-5678', '7500.20', 'Specialized in shoe manufacturing'),
    ('3', 'AccessoriesLtd', '789 Fashion Road', '10', '555-345-6789', '8200.00', 'Fashion accessories and jewelry supplier'),
    ('4', 'ThreadSupplies', '321 Thread Lane', '6', '555-456-7890', '12300.75', 'Large supplier of sewing thread and threads'),
    ('5', 'ButtonEmporium', '567 Button Drive', '8', '555-567-8901', '9500.30', 'Specialist in buttons and fasteners');

-- Filling partsupp table
INSERT INTO PARTSUPP (PS_PARTKEY, PS_SUPPKEY, PS_AVAILQTY, PS_SUPPLYCOST, PS_COMMENT) VALUES
    ('06', '1', '100', '50.0', ' '),
    ('07', '2', '150', '48.0', ' '),
    ('08', '1', '200', '45.0', ' '),
    ('09', '2', '50', '55.0', ' '),
    ('10', '3', '75', '40.0', ' ');

-- Filling  customer table
INSERT INTO customer(C_CUSTKEY,C_NAME,C_ADDRESS,C_NATIONKEY,C_PHONE,C_ACCTBAL,C_MKTSEGMENT,C_COMMENT ) VALUES
    ('1','Yusuf Coskun', 'Erenburgerstraße', '10', '017662152629', '21421.42', 'asedfghqwr','Developer and Customer'),
    ('2','Peter Mueller', 'Burgererenstraße', '9', '01766321627', '21.69','qwertzuiop', 'Just an Example'),
    ('3', 'Hans Beispiel', 'Straßenbeispielstraße', '8', '0172637217', '8218.21', 'asdfghjklo','Unangenehm'),
    ('4', 'Example Beispiel', 'Examplestraße', '7', '271646721', '420.29', 'yxcvbnmkjh', 'Beispieltext'),
    ('5', 'Manfrett Chicken', 'Valenstraße', '6', '21982173', '999.99', 'qayxswedcv',''),
    ('6', 'Maria Schmidt', 'Blumenweg', '6', '017612345678', '12345.67', 'qwertzuioa', 'Flower enthusiast'),
    ('7', 'John Doe', '123 Main Street', '7', '5551234', '98765.43', 'qwertzuios', 'Techie and proud'),
    ('8', 'Alice Johnson', 'Wonderland Avenue', '6', '9876543', '5432.10', 'qwertzuiod', 'Living in a fantasy world'),
    ('9', 'Bob Builder', 'Construction Road', '6', '1239876', '8765.43', 'qwertzuiof', 'Can we build it? Yes, we can!'),
    ('10', 'Eva Green', 'Mystic Lane', '6', '5556789', '6789.01', 'qwertzuiog', 'Always searching for the unknown'),
    ('11', 'Sophie Smith', 'Sunset Boulevard', '6', '017634567890','231.23', 'ertzuiopks', 'Lover of sunsets and travel'),
    ('12', 'Michael Jordan', 'Basketball Court', '6', '5559876', '87654.32', 'qwertzuioj', 'G.O.A.T in basketball'),
    ('13', 'Emma Watson', 'Bookworm Lane', '6', '9875432', '12345.67', 'qwertzuiok', 'Actress and book lover'),
    ('14', 'Chris Evans', 'Superhero Street', '6', '1238765', '5678.90', 'qwertzuiol', 'Saving the world, one movie at a time'),
    ('15', 'Amanda Surge', 'Power Plant Avenue', '7', '5557890', '8901.23', 'qwertzuioö', 'Keeping the lights on'),
    ('16', 'Oliver Twist', 'Orphanage Lane', '7', '017645678901', '123.45', 'qwertzuioä', 'Asking for more'),
    ('17', 'Taylor Swift', 'Music City', '7', '5558765', '98765.43', 'qwertzuioy', 'Singer-songwriter extraordinaire'),
    ('18', 'David Beckham', 'Football Field', '7', '9874321', '5432.10', 'qwertzuiox', 'Legendary footballer'),
    ('19', 'Marilyn Monroe', 'Hollywood Boulevard', '8', '1237654', '6789.01', 'qwertzuioc', 'Iconic actress'),
    ('20', 'Alan Turing', 'Code Breaker Street', '8', '5558901', '10101.01', 'qwertzuiov', 'Father of computer science'),
    ('21', 'Luna Lovegood', 'Magical Meadow', '8', '017656789012', '543.21', 'qwertzuiob', 'Believer in magical creatures'),
    ('22', 'Leonardo da Vinci', 'Artisan Avenue', '8', '5556543', '8765.43', 'qwertzuion', 'Renaissance polymath'),
    ('23', 'Elon Musk', 'Innovation Street', '9', '9873210', '98765.43', 'qwertzuiom', 'Visionary entrepreneur'),
    ('24', 'Coco Chanel', 'Fashion Avenue', '9', '1236543', '4321.09', 'wwertzuiop', 'Legendary fashion designer'),
    ('25', 'Issa Rae', 'Creative Corner', '10', '5559012', '2109.87', 'ewertzuiop', 'Multi-talented creator');

-- Filling orders table
INSERT INTO ORDERS (O_ORDERKEY, O_CUSTKEY, O_ORDERSTATUS, O_TOTALPRICE, O_ORDERDATE, O_ORDERPRIORITY, O_CLERK, O_SHIPPRIORITY, O_COMMENT) VALUES
  ('1', '1', 'P', '100.0', '2022-1-01', 'High', 'Clerk1', '1', ''),
  ('2', '2', 'S', '200.0', '2022-1-02', 'Medium', 'Clerk2', '2', ''),
  ('3', '2', 'P', '150.0', '2022-1-03', 'Low', 'Clerk3', '1', ''),
  ('4', '2', 'S', '120.0', '2022-1-04', 'Medium', 'Clerk4', '3', ''),
  ('5', '5', 'P', '180.0', '2022-2-05', 'High', 'Clerk5', '2', ''),
  ('6', '6', 'P', '300.0', '2022-2-06', 'High', 'Clerk6', '1', ''),
  ('7', '7', 'S', '400.0', '2022-2-07', 'Medium', 'Clerk7', '2', ''),
  ('8', '8', 'P', '350.0', '2022-3-08', 'Low', 'Clerk8', '1', ''),
  ('9', '9', 'S', '320.0', '2022-3-09', 'Medium', 'Clerk9', '3', ''),
  ('10', '10', 'P', '380.0', '2022-5-10', 'High', 'Clerk10', '2', ''),
  ('11', '11', 'S', '420.0', '2022-5-11', 'Low', 'Clerk11', '1', ''),
  ('12', '12', 'P', '450.0', '2022-6-12', 'Medium', 'Clerk12', '2', ''),
  ('13', '13', 'S', '370.0', '2022-6-13', 'High', 'Clerk13', '3', ''),
  ('14', '14', 'P', '310.0', '2022-10-14', 'Low', 'Clerk14', '1', ''),
  ('15', '15', 'S', '280.0', '2022-10-15', 'Medium', 'Clerk15', '2', ''),
  ('16', '16', 'P', '330.0', '2022-10-16', 'High', 'Clerk16', '1', ''),
  ('17', '17', 'S', '360.0', '2022-10-17', 'Medium', 'Clerk17', '2', ''),
  ('18', '18', 'P', '410.0', '2022-10-18', 'Low', 'Clerk18', '3', ''),
  ('19', '19', 'S', '390.0', '2023-1-19', 'High', 'Clerk19', '1', ''),
  ('20', '20', 'P', '420.0', '2023-1-20', 'Medium', 'Clerk20', '2', ''),
  ('21', '21', 'S', '480.0', '2023-1-21', 'Low', 'Clerk21', '1', ''),
  ('22', '22', 'P', '510.0', '2023-1-22', 'Medium', 'Clerk22', '2', ''),
  ('23', '23', 'S', '470.0', '2023-1-23', 'High', 'Clerk23', '3', ''),
  ('24', '24', 'P', '430.0', '2023-1-24', 'Low', 'Clerk24', '1', ''),
  ('25', '25', 'S', '380.0', '2023-1-25', 'Medium', 'Clerk25', '2', ''),
  ('26', '6', 'P', '300.0', '2023-2-01', 'High', 'Clerk26', '1', ''),
  ('27', '6', 'S', '400.0', '2023-2-02', 'Medium', 'Clerk27', '2', ''),
  ('28', '7', 'P', '350.0', '2023-2-03', 'Low', 'Clerk28', '1', ''),
  ('29', '7', 'S', '320.0', '2023-5-04', 'Medium', 'Clerk29', '3', ''),
  ('30', '7', 'P', '380.0', '2023-6-05', 'High', 'Clerk30', '2', ''),
  ('31', '8', 'S', '420.0', '2023-6-06', 'Low', 'Clerk31', '1', ''),
  ('32', '8', 'P', '450.0', '2023-6-07', 'Medium', 'Clerk32', '2', ''),
  ('33', '9', 'S', '370.0', '2023-7-08', 'High', 'Clerk33', '3', ''),
  ('34', '9', 'P', '310.0', '2023-7-09', 'Low', 'Clerk34', '1', ''),
  ('35', '9', 'S', '280.0', '2023-10-10', 'Medium', 'Clerk35', '2', ''),
  ('36', '10', 'P', '330.0', '2023-10-11', 'High', 'Clerk36', '1', ''),
  ('37', '10', 'S', '360.0', '2023-10-12', 'Medium', 'Clerk37', '2', ''),
  ('38', '11', 'P', '410.0', '2023-10-13', 'Low', 'Clerk38', '3', ''),
  ('39', '11', 'S', '390.0', '2023-10-14', 'High', 'Clerk39', '1', ''),
  ('40', '12', 'P', '420.0', '2023-11-15', 'Medium', 'Clerk40', '2', ''),
  ('41', '12', 'S', '480.0', '2023-11-16', 'Low', 'Clerk41', '1', ''),
  ('42', '13', 'P', '510.0', '2023-11-17', 'Medium', 'Clerk42', '2', ''),
  ('43', '13', 'S', '470.0', '2023-11-18', 'High', 'Clerk43', '3', ''),
  ('44', '14', 'P', '430.0', '2024-1-19', 'Low', 'Clerk44', '1', ''),
  ('45', '14', 'S', '380.0', '2024-1-20', 'Medium', 'Clerk45', '2', ''),
  ('46', '15', 'P', '300.0', '2024-1-21', 'High', 'Clerk46', '1', ''),
  ('47', '15', 'S', '800.0', '2024-1-22', 'Medium', 'Clerk47', '2', '');

-- Filling lineitem table
INSERT INTO LINEITEM (L_ORDERKEY, L_PARTKEY, L_SUPPKEY, L_LINENUMBER, L_QUANTITY, L_EXTENDEDPRICE, L_DISCOUNT, L_TAX, L_RETURNFLAG, L_LINESTATUS, L_SHIPDATE, L_COMMITDATE, L_RECEIPTDATE, L_SHIPINSTRUCT, L_SHIPMODE, L_COMMENT) VALUES
  ('1', '6', '1', '1', '10.0', '100.0', '0.05', '0.1', 'R', 'F', '2022-10-05', '2022-10-03', '2022-10-06', 'Handle with care', 'Air', ''),
  ('1', '7', '1', '2', '15.0', '150.0', '0.1', '0.05', 'N', 'S', '2022-10-07', '2022-10-04', '2022-10-08', 'Fragile', 'Sea', ''),
  ('2', '8', '2', '1', '5.0', '50.0', '0.03', '0.07', 'N', 'S', '2022-1-09', '2022-1-06', '2022-1-10', 'Standard', 'Ground', ''),
  ('2', '9', '3', '2', '8.0', '80.0', '0.08', '0.06', 'R', 'F', '2022-1-11', '2022-1-07', '2022-1-12', 'Fragile', 'Air', ''),
  ('3', '10', '4', '1', '12.0', '120.0', '0.12', '0.09', 'R', 'F', '2022-2-13', '2022-2-10', '2022-2-14', 'Handle with care', 'Ground', ''),
  ('4', '11', '5', '1', '20.0', '200.0', '0.02', '0.15', 'N', 'O', '2022-2-15', '2022-2-16', '2022-2-17', 'Fragile', 'Sea', ''),
  ('4', '12', '5', '2', '25.0', '250.0', '0.03', '0.12', 'R', 'F', '2022-5-18', '2022-5-19', '2022-5-20', 'Handle with care', 'Air', ''),
  ('4', '13', '4', '3', '30.0', '300.0', '0.05', '0.2', 'N', 'S', '2022-5-21', '2022-5-22', '2022-5-23', 'Standard', 'Ground', ''),
  ('5', '14', '4', '1', '35.0', '350.0', '0.07', '0.18', 'R', 'F', '2022-8-24', '2022-8-25', '2022-8-26', 'Fragile', 'Air', ''),
  ('5', '15', '4', '2', '40.0', '400.0', '0.1', '0.15', 'N', 'S', '2022-8-27', '2022-8-28', '2022-8-29', 'Handle with care', 'Sea', ''),
  ('6', '6', '1', '1', '15.0', '150.0', '0.08', '0.07', 'R', 'F', '2022-10-30', '2022-10-31', '2022-11-01', 'Fragile', 'Ground', ''),
  ('6', '7', '2', '2', '20.0', '200.0', '0.05', '0.1', 'N', 'O', '2022-11-02', '2022-11-03', '2022-11-04', 'Standard', 'Air', ''),
  ('6', '8', '3', '3', '25.0', '250.0', '0.03', '0.12', 'R', 'F', '2022-11-05', '2022-11-06', '2022-11-07', 'Fragile', 'Sea', ''),
  ('7', '9', '4', '1', '30.0', '300.0', '0.02', '0.15', 'N', 'S', '2022-11-08', '2022-11-09', '2022-11-10', 'Handle with care', 'Ground', ''),
  ('7', '10', '5', '2', '35.0', '350.0', '0.01', '0.18', 'R', 'O', '2022-11-11', '2022-11-12', '2022-11-13', 'Fragile', 'Air', ''),
  ('7', '11', '4', '3', '40.0', '400.0', '0.1', '0.2', 'N', 'S', '2022-11-14', '2022-11-15', '2022-11-16', 'Handle with care', 'Sea', ''),
  ('8', '12', '4', '1', '45.0', '450.0', '0.07', '0.15', 'R', 'F', '2023-1-17', '2023-1-18', '2023-1-19', 'Fragile', 'Ground', ''),
  ('8', '13', '4', '2', '50.0', '500.0', '0.05', '0.1', 'N', 'O', '2023-1-20', '2023-1-21', '2023-1-22', 'Standard', 'Air', ''),
  ('9', '14', '5', '1', '10.0', '100.0', '0.05', '0.1', 'R', 'F', '2023-1-23', '2023-1-24', '2023-1-25', 'Handle with care', 'Sea', ''),
  ('9', '15', '1', '2', '15.0', '150.0', '0.1', '0.05', 'N', 'S', '2023-1-26', '2023-1-27', '2023-1-28', 'Fragile', 'Ground', ''),
  ('10', '6', '1', '1', '5.0', '50.0', '0.03', '0.07', 'N', 'S', '2023-1-29', '2023-1-30', '2023-2-01', 'Standard', 'Air', ''),
  ('10', '7', '2', '2', '8.0', '80.0', '0.08', '0.06', 'R', 'F', '2023-2-02', '2023-2-03', '2023-2-04', 'Fragile', 'Sea', ''),
  ('10', '8', '3', '3', '12.0', '120.0', '0.12', '0.09', 'R', 'F', '2023-3-05', '2023-3-06', '2023-3-07', 'Handle with care', 'Ground', ''),
  ('11', '9', '4', '1', '15.0', '150.0', '0.1', '0.2', 'N', 'S', '2023-3-08', '2023-3-09', '2023-3-10', 'Standard', 'Air', ''),
  ('11', '10', '5', '2', '20.0', '200.0', '0.07', '0.15', 'R', 'F', '2023-3-11', '2023-3-12', '2023-3-13', 'Fragile', 'Sea', ''),
  ('11', '11', '2', '3', '25.0', '250.0', '0.05', '0.1', 'N', 'O', '2023-3-14', '2023-3-15', '2023-3-16', 'Handle with care', 'Ground', ''),
  ('12', '12', '2', '1', '30.0', '300.0', '0.03', '0.12', 'R', 'F', '2023-3-17', '2023-3-18', '2023-3-19', 'Fragile', 'Air', ''),
  ('12', '13', '2', '2', '35.0', '350.0', '0.02', '0.15', 'N', 'S', '2023-3-20', '2023-3-21', '2023-3-22', 'Standard', 'Sea', ''),
  ('12', '14', '2', '3', '40.0', '400.0', '0.01', '0.18', 'R', 'F', '2023-12-23', '2023-12-24', '2023-12-25', 'Handle with care', 'Ground', ''),
  ('13', '15', '1', '1', '45.0', '450.0', '0.1', '0.2', 'N', 'O', '2023-12-26', '2023-12-27', '2023-12-28', 'Fragile', 'Air', ''),
  ('13', '6', '1', '2', '50.0', '500.0', '0.07', '0.15', 'R', 'F', '2023-12-29', '2023-12-30', '2023-12-31', 'Fragile', 'Sea', ''),
  ('13', '7', '2', '3', '10.0', '100.0', '0.05', '0.1', 'N', 'S', '2024-01-01', '2024-01-02', '2024-01-03', 'Handle with care', 'Ground', ''),
  ('14', '8', '3', '1', '15.0', '150.0', '0.1', '0.05', 'R', 'F', '2024-01-04', '2024-01-05', '2024-01-06', 'Standard', 'Air', ''),
  ('14', '9', '4', '2', '20.0', '200.0', '0.05', '0.1', 'N', 'S', '2024-01-07', '2024-01-08', '2024-01-09', 'Fragile', 'Sea', '');