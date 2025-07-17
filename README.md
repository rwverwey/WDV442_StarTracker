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

## Create a Star (linked to Galaxy ID) (Working)

```bash
curl -X POST http://localhost:8080/stars \
    -H "Content-Type: application/json" \
    -d '{"name":"Sun","size":100,"description":"Main sequence star","galaxyId":1}'
```

## Get All Stars (Working)

```bash
curl -X GET http://localhost:8080/stars
```

## Get One Star (Working)

```bash
curl -X GET http://localhost:8080/stars/1
```

## Update a Star (Working)

```bash
curl -X PUT http://localhost:8080/stars/1 \
    -H "Content-Type: application/json" \
    -d '{"size":101}'
```

## Delete a Star (Working)

```bash
curl -X DELETE http://localhost:8080/stars/1
```

---

# Planet

## Create a Planet (linked to Star ID) (Working)

```bash
curl -X POST http://localhost:8080/planets \
    -H "Content-Type: application/json" \
    -d '{"name":"Earth","size":50,"description":"Habitable planet","starId":1}'
```

## Get All Planets (Working)

```bash
curl -X GET http://localhost:8080/planets
```

## Get One Planet (Working)

```bash
curl -X GET http://localhost:8080/planets/1
```

## Update a Planet (Working)

```bash
curl -X PUT http://localhost:8080/planets/1 \
    -H "Content-Type: application/json" \
    -d '{"size":51}'
```

## Delete a Planet (Working)

```bash
curl -X DELETE http://localhost:8080/planets/1
```


# Star-Planet Relationships

## Create a Star-Planet Link (Working)

```bash
curl -X POST http://localhost:8080/starsplanets \
    -H "Content-Type: application/json" \
    -d '{"starId":2,"planetId":4}'
```

## Get All Star-Planet Links (Working)

```bash
curl -X GET http://localhost:8080/starsplanets
```

## Get One Star-Planet Link (Working)
```bash
curl -X GET http://localhost:8080/starsplanets/10
```

## Update a Star-Planet Link (Working)

```bash
curl -X PUT http://localhost:8080/starsplanets/9 \
    -H "Content-Type: application/json" \
    -d '{"starId":11,"planetId":1}'
```

## Delete a Star-Planet Link (Working)

```bash
curl -X DELETE http://localhost:8080/starsplanets/23
```
