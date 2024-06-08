def card_value(card):
    """ Returns the value of the card """
    value_str = card[:-1]
    if value_str.isdigit():
        return int(value_str)
    else:
        value_dict = {'J': 11, 'Q': 12, 'K': 13, 'A': 14}
        return value_dict[value_str]

def play_war_game(p1_deck, p2_deck):
    round_count = 0
    
    while p1_deck and p2_deck:
        round_count += 1
        battlefield_1 = []
        battlefield_2 = []
        
        while True:
            if not p1_deck or not p2_deck:
                return "PAT"
                
            card1 = p1_deck.pop(0)
            card2 = p2_deck.pop(0)
            battlefield_1.append(card1)
            battlefield_2.append(card2)
            
            if card_value(card1) > card_value(card2):
                p1_deck.extend(battlefield_1 + battlefield_2)
                break
            elif card_value(card1) < card_value(card2):
                p2_deck.extend(battlefield_1 + battlefield_2)
                break
            else:
                if len(p1_deck) < 4 or len(p2_deck) < 4:
                    return "PAT"
                battlefield_1.extend(p1_deck[:3])
                battlefield_2.extend(p2_deck[:3])
                p1_deck = p1_deck[3:]
                p2_deck = p2_deck[3:]
    
    if not p2_deck:
        return f"1 {round_count}"
    else:
        return f"2 {round_count}"

# Read input
n = int(input())
p1_deck = [input().strip() for _ in range(n)]
m = int(input())
p2_deck = [input().strip() for _ in range(m)]

# Play the game
result = play_war_game(p1_deck, p2_deck)

# Print the result
print(result)
