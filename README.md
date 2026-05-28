# Cookie Admin Panel — CTF Challenge

## Challenge Summary

This is a beginner-friendly web challenge about browser cookies.

Participants visit a simple web page that sets a cookie:

```text
is_admin=false
```

To solve the challenge, they inspect their browser cookies, change the value to:

```text
is_admin=true
```

Then they refresh the page or click the button to reveal the flag.

## Flag

```text
iccctf{c00k13s_@r3_n0t_s3cur1ty}
```

## CTFd Challenge Details

### Title

```text
Cookie Admin Panel
```

### Category

```text
Web
```

### Difficulty

```text
Easy
```

### Points

```text
50
```

### Description

```markdown
This admin panel says you are only a guest.

Can you convince the website that you should have admin access?

Challenge URL:

`http://your-challenge-url/`

Flag format:

`iccctf{...}`
```

### Hint 1

```text
The website remembers your role somewhere in your browser.
```

### Hint 2

```text
Check the cookies stored for this website.
```

### Hint 3

```text
Try changing is_admin from false to true.
```

## Run Locally with Python

From inside this folder, run:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Run with Docker

Build the image:

```bash
docker build -t cookie-admin-challenge .
```

Run the container:

```bash
docker run -d -p 8080:80 --name cookie-admin-challenge cookie-admin-challenge
```

Then visit:

```text
http://localhost:8080/
```

## Organizer Notes

This is intentionally a client-side-only challenge. It teaches participants that browser-controlled values, such as cookies, should not be trusted for authorization decisions.
