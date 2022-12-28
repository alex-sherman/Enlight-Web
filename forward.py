#!/usr/bin/env python3
from scapy.all import *

def spoof_and_send(packet):
    forwarded = IP(dst="192.168.1.255")/UDP(dport=50123,sport=50123)/packet[Raw]
    send(forwarded)

packets = sniff(filter='udp and port 50123 and dst 192.168.255.255', prn=spoof_and_send)
