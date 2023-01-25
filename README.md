
# Linkt scam site - lint.kbtao.top

Site has checks to make sure client is from China or Australia.

Site uses a websocket and backend running off gldzy1638.asia at the time of writing.

Once card details have been collected they're sent to a telegram bot.

# TOC

- [Linkt scam site - lint.kbtao.top](#linkt-scam-site---lintkbtaotop)
- [Telegram](#telegram)
  * [First bot](#first-bot)
  * [Second bot](#second-bot)
- [Details - link.kbtao.top](#details---linkkbtaotop)
  * [DNS](#dns)
    + [dig lint.kbtao.top](#dig-lintkbtaotop)
    + [dig kbtao.top](#dig-kbtaotop)
    + [dig ns kbtao.top](#dig-ns-kbtaotop)
    + [dig ns1.dnsowl.com](#dig-ns1dnsowlcom)
    + [dig ns2.dnsowl.com](#dig-ns2dnsowlcom)
    + [dig ns3.dnsowl.com](#dig-ns3dnsowlcom)
  * [NMAP](#nmap)
    + [nmap 155.94.163.202](#nmap-15594163202)
  * [Whois](#whois)
    + [whois kbtao.top](#whois-kbtaotop)
    + [whois 155.94.163.202](#whois-15594163202)
    + [whois 209.141.38.71](#whois-2091413871)
- [Details gldzy1638.asia](#details-gldzy1638asia)
  * [DNS](#dns-1)
    + [dig gldzy1638.asia](#dig-gldzy1638asia)
    + [dig ns gldzy1638.asia](#dig-ns-gldzy1638asia)
    + [dig dns17.hichina.com](#dig-dns17hichinacom)
    + [dig dns18.hichina.com](#dig-dns18hichinacom)
  * [NMAP](#nmap-1)
    + [nmap 23.94.201.31](#nmap-239420131)
  * [whois](#whois)
    + [whois gldzy1638.asia](#whois-gldzy1638asia)

# Telegram

Owner can change bots by changing the config/urlConfig.json file

## First bot

```
2023/01/24 14:03:52 Authorized on account kjert8bot
2023/01/24 14:03:53 {"id":1256703850,"type":"private","username":"Froman99","first_name":"Dale","last_name":"Froman","photo":{"small_file_id":"AQADBQADMK8xG8A-4VYACAIAA2rH50oABERFLPkyp89cLQQ","small_file_unique_id":"AQADMK8xG8A-4VYAAQ","big_file_id":"AQADBQADMK8xG8A-4VYACAMAA2rH50oABERFLPkyp89cLQQ","big_file_unique_id":"AQADMK8xG8A-4VYB"},"location":null}
```

## Second bot

```
2023/01/25 22:23:34 Authorized on account azkttbot
2023/01/25 22:23:34 {"id":1305795257,"type":"private","username":"Infoonecc","first_name":"Jeshper","last_name":"rap","photo":{"small_file_id":"AQADBQADr6oxG62UEVYACAIAA7na1E0ABO4XHdlK3d5RLQQ","small_file_unique_id":"AQADr6oxG62UEVYAAQ","big_file_id":"AQADBQADr6oxG62UEVYACAMAA7na1E0ABO4XHdlK3d5RLQQ","big_file_unique_id":"AQADr6oxG62UEVYB"},"location":null}
```

# Details - link.kbtao.top

## DNS

### dig lint.kbtao.top

`dig +short a lint.kbtao.top`

```
155.94.163.202
```

### dig kbtao.top

`dig +short kbtao.top`

```
107.161.23.204
198.251.81.30
209.141.38.71
```

### dig ns kbtao.top

`dig +short ns kbtao.top`

```
ns2.dnsowl.com.
ns1.dnsowl.com.
ns3.dnsowl.com.
```

### dig ns1.dnsowl.com

`dig +short ns1.dnsowl.com`

```
162.159.27.173
162.159.26.136
```

### dig ns2.dnsowl.com

`dig +short ns2.dnsowl.com`

```
162.159.26.49
162.159.27.130
```

### dig ns3.dnsowl.com

`dig +short ns3.dnsowl.com`

```
162.159.26.234
162.159.27.98
```

## NMAP

### nmap 155.94.163.202

`nmap 155.94.163.202`

```
Starting Nmap 7.93 ( https://nmap.org ) at 2023-01-25 23:44 AEST
Nmap scan report for 155.94.163.202.static.quadranet.com (155.94.163.202)
Host is up (0.017s latency).
Not shown: 991 filtered tcp ports (no-response)
PORT     STATE  SERVICE
25/tcp   open   smtp
443/tcp  open   https
777/tcp  closed multiling-http
2710/tcp closed sso-service
2717/tcp closed pn-requester
2718/tcp closed pn-requester2
6901/tcp closed jetstream
6969/tcp closed acmsoda
7000/tcp closed afs3-fileserver
```

## Whois

### whois kbtao.top

`whois kbtao.top`

```
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.nic.top

domain:       TOP

organisation: Jiangsu Bangning Science & Technology Co.,Ltd.
address:      3th Floor, BangNing Technology Park, 2 YuHua Avenue
address:      Yuhuatai District
address:      Nanjing Jiangsu
address:      China

contact:      administrative
name:         Xiangli Li
organisation: Jiangsu Bangning Science & technology Co.,Ltd.
address:      3th Floor, BangNing Technology Park, 2 YuHua Avenue
address:      Yuhuatai District
address:      Nanjing Jiangsu
address:      China
phone:        +86 13915996396
fax-no:       +86 2586883476
e-mail:       newgtld@55hl.com

contact:      technical
name:         Lin Dong
organisation: Jiangsu Bangning Science & technology Co.,Ltd.
address:      3th Floor, BangNing Technology Park, 2 YuHua Avenue
address:      Yuhuatai District
address:      Nanjing Jiangsu
address:      China
phone:        +86 15261877642
fax-no:       +86 02586883476
e-mail:       kf@55hl.com

nserver:      A.ZDNSCLOUD.COM 203.99.24.1
nserver:      B.ZDNSCLOUD.COM 203.99.25.1
nserver:      C.ZDNSCLOUD.COM 203.99.26.1
nserver:      D.ZDNSCLOUD.COM 203.99.27.1
nserver:      F.ZDNSCLOUD.COM 114.67.16.204
nserver:      G.ZDNSCLOUD.COM 42.62.2.16
nserver:      I.ZDNSCLOUD.COM 2401:8d00:1:0:0:0:0:1
nserver:      J.ZDNSCLOUD.COM 2401:8d00:2:0:0:0:0:1
ds-rdata:     56384 8 2 ba378c5913404ec654df544f519b0fb287e140d64dac5d59e349962393c17945

whois:        whois.nic.top

status:       ACTIVE
remarks:      Registration information: http://www.nic.top

created:      2014-07-24
changed:      2022-12-08
source:       IANA

# whois.nic.top

Domain Name: kbtao.top
Registry Domain ID: D20230123G10001G_95105480-top
Registrar WHOIS Server: whois.namesilo.com
Registrar URL: https://www.namesilo.com
Updated Date: 2023-01-23T14:36:04Z
Creation Date: 2023-01-23T14:24:22Z
Registry Expiry Date: 2024-01-23T14:24:22Z
Registrar: NameSilo,LLC
Registrar IANA ID: 1479
Registrar Abuse Contact Email: abuse@namesilo.com
Registrar Abuse Contact Phone: +1.4805240066
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Domain Status: addPeriod https://icann.org/epp#addPeriod
Registry Registrant ID: REDACTED FOR PRIVACY
Registrant Name: REDACTED FOR PRIVACY
Registrant Organization: PrivacyGuardian.org llc
Registrant Street:  REDACTED FOR PRIVACY
Registrant City: REDACTED FOR PRIVACY
Registrant State/Province: AZ
Registrant Postal Code: REDACTED FOR PRIVACY
Registrant Country: US
Registrant Phone: REDACTED FOR PRIVACY
Registrant Phone Ext: REDACTED FOR PRIVACY
Registrant Fax: REDACTED FOR PRIVACY
Registrant Fax Ext: REDACTED FOR PRIVACY
Registrant Email: Please query the RDDS service of the Registrar of Record  identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
Registry Admin ID: REDACTED FOR PRIVACY
Admin Name: REDACTED FOR PRIVACY
Admin Organization: REDACTED FOR PRIVACY
Admin Street:  REDACTED FOR PRIVACY
Admin City: REDACTED FOR PRIVACY
Admin State/Province: REDACTED FOR PRIVACY
Admin Postal Code: REDACTED FOR PRIVACY
Admin Country: REDACTED FOR PRIVACY
Admin Phone: REDACTED FOR PRIVACY
Admin Phone Ext: REDACTED FOR PRIVACY
Admin Fax: REDACTED FOR PRIVACY
Admin Fax Ext: REDACTED FOR PRIVACY
Admin Email: Please query the RDDS service of the Registrar of Record  identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
Registry Tech ID: REDACTED FOR PRIVACY
Tech Name: REDACTED FOR PRIVACY
Tech Organization: REDACTED FOR PRIVACY
Tech Street:  REDACTED FOR PRIVACY
Tech City: REDACTED FOR PRIVACY
Tech State/Province: REDACTED FOR PRIVACY
Tech Postal Code: REDACTED FOR PRIVACY
Tech Country: REDACTED FOR PRIVACY
Tech Phone: REDACTED FOR PRIVACY
Tech Phone Ext: REDACTED FOR PRIVACY
Tech Fax: REDACTED FOR PRIVACY
Tech Fax Ext: REDACTED FOR PRIVACY
Tech Email: Please query the RDDS service of the Registrar of Record  identified in this output for information on how to contact the Registrant, Admin, or Tech contact of the queried domain name.
Name Server: ns3.dnsowl.com
Name Server: ns2.dnsowl.com
Name Server: ns1.dnsowl.com
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of WHOIS database: 2023-01-25T13:11:10Z <<<

# whois.namesilo.com

Domain Name: kbtao.top
Registry Domain ID: 20230123g10001g-95105480
Registrar WHOIS Server: whois.namesilo.com
Registrar URL: https://www.namesilo.com/
Updated Date: 2023-01-24T07:00:00Z
Creation Date: 2023-01-23T07:00:00Z
Registrar Registration Expiration Date: 2024-01-23T07:00:00Z
Registrar: NameSilo, LLC
Registrar IANA ID: 1479
Registrar Abuse Contact Email: abuse@namesilo.com
Registrar Abuse Contact Phone: +1.4805240066
Domain Status: clientTransferProhibited https://www.icann.org/epp#clientTransferProhibited
Registry Registrant ID: 
Registrant Name: REDACTED FOR PRIVACY
Registrant Organization: PrivacyGuardian.org llc
Registrant Street: 1928 E. Highland Ave. Ste F104 PMB# 255
Registrant City: Phoenix
Registrant State/Province: AZ
Registrant Postal Code: 85016
Registrant Country: US
Registrant Phone: +1.3478717726
Registrant Phone Ext: 
Registrant Fax: 
Registrant Fax Ext: 
Registrant Email: pw-fd33cbec970e9d6e9735677fe0fb143c@privacyguardian.org
Registry Admin ID: 
Admin Name: Domain Administrator
Admin Organization: PrivacyGuardian.org llc
Admin Street: 1928 E. Highland Ave. Ste F104 PMB# 255
Admin City: Phoenix
Admin State/Province: AZ
Admin Postal Code: 85016
Admin Country: US
Admin Phone: +1.3478717726
Admin Phone Ext: 
Admin Fax: 
Admin Fax Ext: 
Admin Email: pw-fd33cbec970e9d6e9735677fe0fb143c@privacyguardian.org
Registry Tech ID: 
Tech Name: Domain Administrator
Tech Organization: PrivacyGuardian.org llc
Tech Street: 1928 E. Highland Ave. Ste F104 PMB# 255
Tech City: Phoenix
Tech State/Province: AZ
Tech Postal Code: 85016
Tech Country: US
Tech Phone: +1.3478717726
Tech Phone Ext: 
Tech Fax: 
Tech Fax Ext: 
Tech Email: pw-fd33cbec970e9d6e9735677fe0fb143c@privacyguardian.org
Name Server: NS1.DNSOWL.COM
Name Server: NS2.DNSOWL.COM
Name Server: NS3.DNSOWL.COM
DNSSEC: unsigned
URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/
>>> Last update of WHOIS database: 2023-01-25T07:00:00Z <<<
```

### whois 155.94.163.202

`whois 155.94.163.202`

```
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      155.0.0.0 - 155.255.255.255
organisation: Administered by ARIN
status:       LEGACY

whois:        whois.arin.net

changed:      1993-05
source:       IANA

# whois.arin.net

NetRange:       155.94.128.0 - 155.94.255.255
CIDR:           155.94.128.0/17
NetName:        QUADRANET
NetHandle:      NET-155-94-128-0-1
Parent:         NET155 (NET-155-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS8100
Organization:   QuadraNet Enterprises LLC (QEL-5)
RegDate:        2014-06-11
Updated:        2018-08-30
Ref:            https://rdap.arin.net/registry/ip/155.94.128.0


OrgName:        QuadraNet Enterprises LLC
OrgId:          QEL-5
Address:        19528 Ventura Blvd #433
City:           Tarzana
StateProv:      CA
PostalCode:     91356
Country:        US
RegDate:        2018-06-07
Updated:        2018-10-11
Ref:            https://rdap.arin.net/registry/entity/QEL-5

ReferralServer:  rwhois://rwhois.quadranet.com:4321

OrgTechHandle: QNO6-ARIN
OrgTechName:   QuadraNet Network Operations
OrgTechPhone:  +1-213-614-9371 
OrgTechEmail:  support@quadranet.com
OrgTechRef:    https://rdap.arin.net/registry/entity/QNO6-ARIN

OrgAbuseHandle: QUADR4-ARIN
OrgAbuseName:   QuadraNet Abuse
OrgAbusePhone:  +1-213-614-8371 
OrgAbuseEmail:  abuse@quadranet.com
OrgAbuseRef:    https://rdap.arin.net/registry/entity/QUADR4-ARIN

### whois 107.161.23.204
whois 107.161.23.204

% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      107.0.0.0 - 107.255.255.255
organisation: ARIN
status:       ALLOCATED

whois:        whois.arin.net

changed:      2010-02
source:       IANA

# whois.arin.net

NetRange:       107.161.16.0 - 107.161.31.255
CIDR:           107.161.16.0/20
NetName:        RAMNODE-7
NetHandle:      NET-107-161-16-0-1
Parent:         NET107 (NET-107-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS3842
Organization:   InMotion Hosting, Inc. (INMOT-1)
RegDate:        2014-01-08
Updated:        2021-02-19
Ref:            https://rdap.arin.net/registry/ip/107.161.16.0


OrgName:        InMotion Hosting, Inc.
OrgId:          INMOT-1
Address:        555 S Independence Blvd
City:           Virginia Beach
StateProv:      VA
PostalCode:     23452
Country:        US
RegDate:        2008-06-03
Updated:        2022-07-21
Ref:            https://rdap.arin.net/registry/entity/INMOT-1


OrgTechHandle: NETWO9334-ARIN
OrgTechName:   Network Operations
OrgTechPhone:  +1-757-693-5293 
OrgTechEmail:  noc@inmotionhosting.com
OrgTechRef:    https://rdap.arin.net/registry/entity/NETWO9334-ARIN

OrgAbuseHandle: SYSTE299-ARIN
OrgAbuseName:   Systems Team
OrgAbusePhone:  +1-888-321-4678 
OrgAbuseEmail:  abuse@inmotionhosting.com
OrgAbuseRef:    https://rdap.arin.net/registry/entity/SYSTE299-ARIN


whois 198.251.81.30
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      198.0.0.0 - 198.255.255.255
organisation: Administered by ARIN
status:       LEGACY

remarks:      198.18.0.0/15 reserved for Network Interconnect Device
remarks:      Benchmark Testing [RFC2544]. Complete registration
remarks:      details for 198.18.0.0/15 are found
remarks:      iniana-ipv4-special-registry.198.51.100.0/24 reserved
remarks:      for TEST-NET-2 [RFC5737]. Complete registration details
remarks:      for 198.51.100.0/24 are found
remarks:      iniana-ipv4-special-registry.

whois:        whois.arin.net

changed:      1993-05
source:       IANA

# whois.arin.net

NetRange:       198.251.80.0 - 198.251.95.255
CIDR:           198.251.80.0/20
NetName:        PONYNET-07
NetHandle:      NET-198-251-80-0-1
Parent:         NET198 (NET-198-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS53667
Organization:   FranTech Solutions (SYNDI-5)
RegDate:        2013-02-13
Updated:        2013-02-13
Ref:            https://rdap.arin.net/registry/ip/198.251.80.0


OrgName:        FranTech Solutions
OrgId:          SYNDI-5
Address:        1621 Central Ave
City:           Cheyenne
StateProv:      WY
PostalCode:     82001
Country:        US
RegDate:        2010-07-21
Updated:        2017-01-28
Ref:            https://rdap.arin.net/registry/entity/SYNDI-5


OrgAbuseHandle: FDI19-ARIN
OrgAbuseName:   Dias, Francisco 
OrgAbusePhone:  +1-778-977-8246 
OrgAbuseEmail:  admin@frantech.ca
OrgAbuseRef:    https://rdap.arin.net/registry/entity/FDI19-ARIN

OrgTechHandle: FDI19-ARIN
OrgTechName:   Dias, Francisco 
OrgTechPhone:  +1-778-977-8246 
OrgTechEmail:  admin@frantech.ca
OrgTechRef:    https://rdap.arin.net/registry/entity/FDI19-ARIN
```

### whois 209.141.38.71

`whois 209.141.38.71`

```
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      209.0.0.0 - 209.255.255.255
organisation: ARIN
status:       ALLOCATED

whois:        whois.arin.net

changed:      1996-06
source:       IANA

# whois.arin.net

NetRange:       209.141.32.0 - 209.141.63.255
CIDR:           209.141.32.0/19
NetName:        PONYNET-04
NetHandle:      NET-209-141-32-0-1
Parent:         NET209 (NET-209-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS53667
Organization:   FranTech Solutions (SYNDI-5)
RegDate:        2011-01-27
Updated:        2012-03-25
Ref:            https://rdap.arin.net/registry/ip/209.141.32.0


OrgName:        FranTech Solutions
OrgId:          SYNDI-5
Address:        1621 Central Ave
City:           Cheyenne
StateProv:      WY
PostalCode:     82001
Country:        US
RegDate:        2010-07-21
Updated:        2017-01-28
Ref:            https://rdap.arin.net/registry/entity/SYNDI-5


OrgTechHandle: FDI19-ARIN
OrgTechName:   Dias, Francisco 
OrgTechPhone:  +1-778-977-8246 
OrgTechEmail:  admin@frantech.ca
OrgTechRef:    https://rdap.arin.net/registry/entity/FDI19-ARIN

OrgAbuseHandle: FDI19-ARIN
OrgAbuseName:   Dias, Francisco 
OrgAbusePhone:  +1-778-977-8246 
OrgAbuseEmail:  admin@frantech.ca
OrgAbuseRef:    https://rdap.arin.net/registry/entity/FDI19-ARIN

### whois 162.159.26.49
whois 162.159.26.49
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.arin.net

inetnum:      162.0.0.0 - 162.255.255.255
organisation: Administered by ARIN
status:       LEGACY

whois:        whois.arin.net

changed:      1993-05
source:       IANA

# whois.arin.net

NetRange:       162.158.0.0 - 162.159.255.255
CIDR:           162.158.0.0/15
NetName:        CLOUDFLARENET
NetHandle:      NET-162-158-0-0-1
Parent:         NET162 (NET-162-0-0-0-0)
NetType:        Direct Allocation
OriginAS:       AS13335
Organization:   Cloudflare, Inc. (CLOUD14)
RegDate:        2013-05-23
Updated:        2021-05-26
Comment:        All Cloudflare abuse reporting can be done via https://www.cloudflare.com/abuse
Ref:            https://rdap.arin.net/registry/ip/162.158.0.0



OrgName:        Cloudflare, Inc.
OrgId:          CLOUD14
Address:        101 Townsend Street
City:           San Francisco
StateProv:      CA
PostalCode:     94107
Country:        US
RegDate:        2010-07-09
Updated:        2021-07-01
Ref:            https://rdap.arin.net/registry/entity/CLOUD14


OrgNOCHandle: CLOUD146-ARIN
OrgNOCName:   Cloudflare-NOC
OrgNOCPhone:  +1-650-319-8930 
OrgNOCEmail:  noc@cloudflare.com
OrgNOCRef:    https://rdap.arin.net/registry/entity/CLOUD146-ARIN

OrgAbuseHandle: ABUSE2916-ARIN
OrgAbuseName:   Abuse
OrgAbusePhone:  +1-650-319-8930 
OrgAbuseEmail:  abuse@cloudflare.com
OrgAbuseRef:    https://rdap.arin.net/registry/entity/ABUSE2916-ARIN

OrgRoutingHandle: CLOUD146-ARIN
OrgRoutingName:   Cloudflare-NOC
OrgRoutingPhone:  +1-650-319-8930 
OrgRoutingEmail:  noc@cloudflare.com
OrgRoutingRef:    https://rdap.arin.net/registry/entity/CLOUD146-ARIN

OrgTechHandle: ADMIN2521-ARIN
OrgTechName:   Admin
OrgTechPhone:  +1-650-319-8930 
OrgTechEmail:  rir@cloudflare.com
OrgTechRef:    https://rdap.arin.net/registry/entity/ADMIN2521-ARIN

RAbuseHandle: ABUSE2916-ARIN
RAbuseName:   Abuse
RAbusePhone:  +1-650-319-8930 
RAbuseEmail:  abuse@cloudflare.com
RAbuseRef:    https://rdap.arin.net/registry/entity/ABUSE2916-ARIN

RNOCHandle: NOC11962-ARIN
RNOCName:   NOC
RNOCPhone:  +1-650-319-8930 
RNOCEmail:  noc@cloudflare.com
RNOCRef:    https://rdap.arin.net/registry/entity/NOC11962-ARIN

RTechHandle: ADMIN2521-ARIN
RTechName:   Admin
RTechPhone:  +1-650-319-8930 
RTechEmail:  rir@cloudflare.com
RTechRef:    https://rdap.arin.net/registry/entity/ADMIN2521-ARIN
```

# Details gldzy1638.asia

Hosts the websocket and interactive backend.

## DNS

### dig gldzy1638.asia

`dig +short gldzy1638.asia`

```
23.94.201.31
```

### dig ns gldzy1638.asia

`dig +short ns gldzy1638.asia`

```
dns17.hichina.com.
dns18.hichina.com.
```

### dig dns17.hichina.com

`dig +short dns17.hichina.com.`

```
120.76.107.60
120.76.107.40
39.96.153.60
39.96.153.40
47.118.199.220
47.118.199.200
139.224.142.100
139.224.142.110
```

### dig dns18.hichina.com

`dig +short dns18.hichina.com.`

```
47.118.199.198
120.76.107.61
139.224.142.108
47.118.199.222
139.224.142.98
39.96.153.38
120.76.107.38
39.96.153.61
```

## NMAP

### nmap 23.94.201.31

`nmap 23.94.201.31`

```
Starting Nmap 7.93 ( https://nmap.org ) at 2023-01-25 23:56 AEST
Nmap scan report for gldzy1638.asia (23.94.201.31)
Host is up (0.017s latency).
Not shown: 991 filtered tcp ports (no-response)
PORT     STATE  SERVICE
25/tcp   open   smtp
443/tcp  open   https
777/tcp  closed multiling-http
2710/tcp closed sso-service
2717/tcp closed pn-requester
2718/tcp closed pn-requester2
6901/tcp closed jetstream
6969/tcp closed acmsoda
7000/tcp closed afs3-fileserver
```

## whois

### whois gldzy1638.asia

`whois gldzy1638.asia`

```
% IANA WHOIS server
% for more information on IANA, visit http://www.iana.org
% This query returned 1 object

refer:        whois.nic.asia

domain:       ASIA

organisation: DotAsia Organisation Ltd.
address:      12/F, Daily House
address:      35-37 Haiphong Road
address:      Tsim Sha Tsui Kowloon
address:      Hong Kong

contact:      administrative
name:         DotAsia Administrative Contact
organisation: DotAsia Organisation Ltd.
address:      12/F, Daily House
address:      35-37 Haiphong Road
address:      Tsim Sha Tsui Kowloon
address:      Hong Kong
phone:        +852 8171 1714
fax-no:       +852 2125 8484
e-mail:       admin@iana.whois.asia

contact:      technical
name:         DotAsia Technical Contact
organisation: DotAsia Organisation Ltd.
address:      12/F, Daily House
address:      35-37 Haiphong Road
address:      Tsim Sha Tsui Kowloon
address:      Hong Kong
phone:        +852 8171 1714
fax-no:       +852 2125 8484
e-mail:       tech@iana.whois.asia

nserver:      A0.ASIA.AFILIAS-NST.INFO 199.19.55.1 2001:500:d:0:0:0:0:1
nserver:      A2.ASIA.AFILIAS-NST.INFO 199.249.114.1 2001:500:42:0:0:0:0:1
nserver:      B0.ASIA.AFILIAS-NST.ASIA 199.254.28.1 2001:500:16:0:0:0:0:1
nserver:      B2.ASIA.AFILIAS-NST.ORG 199.249.122.1 2001:500:4a:0:0:0:0:1
nserver:      C0.ASIA.AFILIAS-NST.INFO 199.254.29.1 2001:500:17:0:0:0:0:1
nserver:      D0.ASIA.AFILIAS-NST.ASIA 199.254.30.1 2001:500:18:0:0:0:0:1
ds-rdata:     23407 8 2 0f51a4e5ef96b66c2078f7735b41860c83da0746ddda1a1b2b893ab056b3058c

whois:        whois.nic.asia

status:       ACTIVE
remarks:      Registration information: http://www.registry.asia

created:      2007-05-02
changed:      2023-01-18
source:       IANA

# whois.nic.asia

Domain Name: GLDZY1638.ASIA
Registry Domain ID: D425500000339852293-AGRS
Registrar WHOIS Server:
Registrar URL:
Updated Date: 2022-12-29T13:59:21Z
Creation Date: 2022-08-13T14:38:33Z
Registry Expiry Date: 2023-08-13T14:38:33Z
Registrar Registration Expiration Date:
Registrar: Alibaba Cloud Computing Ltd. d/b/a HiChina (www.net.cn)
Registrar IANA ID: 1599
Registrar Abuse Contact Email:
Registrar Abuse Contact Phone:
Reseller:
Domain Status: ok https://icann.org/epp#ok
Registrant Organization: 屈春生
Registrant State/Province: 河南
Registrant Country: CN
Name Server: DNS18.HICHINA.COM
Name Server: DNS17.HICHINA.COM
DNSSEC: unsigned
URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/
>>> Last update of WHOIS database: 2023-01-25T13:26:54Z <<<
```