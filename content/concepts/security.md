---
title: "Qazana Security"
meta_title: "Qazana Security - Core Concepts"
meta_description: "Qazana is committed to developing secure, reliable products utilising all modern security best practices. Find out more!"
keywords:
    - concepts
    - ghost
    - publishing
    - security
sidebar: "concepts"
---

Qazana is committed to developing secure, reliable products utilising all modern security best practices and processes.

The Qazana security team is made up of full time staff employed by the Qazana Foundation as well as volunteer open source contributors and security experts. We do both consultation and penetration testing of our software and  infrastructure with external security researchers and agencies.

We take security very seriously at Qazana and welcome any peer review of our completely [open source codebase](https://github.com/tryghost/ghost) to help ensure that it remains completely secure.


## Security features

### Automatic SSL

Qazana's CLI tool attempts to automatically configure SSL certificates for all new Qazana installs with Let's Encrypt by default. In 2019 we intend to make SSL mandatory for all new installs.

### Standardised permissions

Qazana-CLI does not run as `root` and automatically configures all server directory permissions correctly according to [OWASP Standards](https://www.owasp.org/index.php/File_System).

### Brute force protection

User login attempts and password reset requests are all limited to 5 per hour per IP.

### Data validation and serlialisation

Qazana performs strong serialisation and validation on all data that goes into the database, as well as automated symlink protection on all uploaded files.

### Encoded tokens everywhere

All user invitation and password reset tokens are base64 encoded with serverside secret. All tokens are always single use and always expire.

### Password hashing

Qazana follows [OWASP authentication standards](https://www.owasp.org/index.php/Top_10-2017_A2-Broken_Authentication) with all passwords hashed and salted properly using `bcrypt` to ensure password integrity.

### SQLi prevention

Qazana uses [Bookshelf](http://bookshelfjs.org) ORM + [Knex](https://knexjs.org) query builder and does not generate _any_ of its own raw SQL queries. Qazana has no interpolation of variables directly to SQL strings.

### XSS prevention

Qazana uses safe/escaped strings used everywhere, including and especially in all custom Handlebars helpers used in [Qazana Themes](/api/handlebars-themes/)

### Dependency management

All Qazana dependencies are continually scanned with [NSP](https://github.com/nodesecurity/nsp) to ensure their integrity.

---

## Privacy

Qazana as an organisation is profitable, wholly independent, and only makes revenue directly from its customers. It has zero business interests of any kind predicated on selling private user data to third parties.

In addition the Qazana software itself contains [a plainly written summary](https://github.com/TryGhost/Qazana/blob/master/PRIVACY.md) of every privacy-affecting feature within Qazana, along with detailed configuration options allowing any and all of them to be disabled at will.

We take user privacy extremely seriously.
