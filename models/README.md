# Galaxy

## Create a Galaxy (Working)

```bash
curl -X POST http://localhost:8080/galaxies \
    -H "Content-Type: application/json" \
    -d '{"name":"Milky Way","type":"Spiral","distance":0,"image":"milky_way.jpg"}'
```

## Get All Galaxies (Working)

```bash
curl -X GET http://localhost:8080/galaxies
```

## Get One Galaxy

```bash
curl -X GET http://localhost:8080/galaxies/1
```

## Update a Galaxy (Working)

```bash
curl -X PUT http://localhost:8080/galaxies/1 \
    -H "Content-Type: application/json" \
    -d '{"type":"Barred Spiral"}'
```

## Delete a Galaxy (Working)

```bash
curl -X DELETE http://localhost:8080/galaxies/1
```

---

# Star

## Create a Star (linked to Galaxy ID)

```bash
curl -X POST http://localhost:8080/stars \
    -H "Content-Type: application/json" \
    -d '{"name":"Sun","size":100,"description":"Main sequence star","galaxyId":1}'
```

## Get All Stars

```bash
curl -X GET http://localhost:8080/stars
```

## Get One Star

```bash
curl -X GET http://localhost:8080/stars/1
```

## Update a Star

```bash
curl -X PUT http://localhost:8080/stars/1 \
    -H "Content-Type: application/json" \
    -d '{"size":101}'
```

## Delete a Star

```bash
curl -X DELETE http://localhost:8080/stars/1
```

---

# Planet

## Create a Planet (linked to Star ID)

```bash
curl -X POST http://localhost:8080/planets \
    -H "Content-Type: application/json" \
    -d '{"name":"Earth","size":50,"description":"Habitable planet","starId":1}'
```

## Get All Planets

```bash
curl -X GET http://localhost:8080/planets
```

## Get One Planet

```bash
curl -X GET http://localhost:8080/planets/1
```

## Update a Planet

```bash
curl -X PUT http://localhost:8080/planets/1 \
    -H "Content-Type: application/json" \
    -d '{"size":51}'
```

## Delete a Planet

```bash
curl -X DELETE http://localhost:8080/planets/1
```