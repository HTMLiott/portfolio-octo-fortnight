import java.util.Scanner;
public class testGame {

	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		colonelKitty ck = new colonelKitty();
		captianCat cc = new captianCat();
		System.out.println("Choose your character: \n");
		System.out.println(ck.getName());
		System.out.println(ck.getDesc());
		System.out.println("Dice are: " + ck.getSides());
		System.out.print("Total dice side count is: ");
		System.out.println(ck.getTotalCount());
		System.out.println();
		System.out.println("or\n");
		System.out.println(cc.getName());
		System.out.println(cc.getDesc());
		System.out.println("Dice are: " + cc.getSides());
		System.out.print("Total dice side count is: ");
		System.out.println(cc.getTotalCount());
		System.out.println();
		
		boolean good = false;
		while (!good) {
			System.out.println("Who do you choose? (colonelKitty or captianCat)");
			String player = in.next();
			String comp = "default";
		if(player.equals("colonelKitty")) {
			comp = "captianCat";
			good = true;
			System.out.println("comp: " + comp + " player: " + player);
		}
		else if(player.equals("captianCat")) {
			comp = "colonelKitty";
			good = true;
			System.out.println("comp: " + comp + " player: " + player);
		}
		else {
			System.out.println("Please select either 'colonelKitty' or 'captainCat'");
		}
		}
		System.out.println();
		
		
//CK's turn against CC	
		
		System.out.println(ck.getName() + "'s roll: ");
		System.out.print("[ " +ck.rolld1() + " ]   ");
		System.out.print("[ " +ck.rolld2() + " ]   ");
		System.out.print("[ " +ck.rolld3() + " ]   ");
		System.out.print("[ " +ck.rolld4() + " ]   ");
		System.out.print("[ " +ck.rolld5() + " ]   ");
		System.out.println("\n");
		
		System.out.println(cc.getName() + "'s roll: ");
		System.out.print("[ " + cc.rolld1() +" ]   ");
		System.out.print("[ " +cc.rolld2() + " ]   ");
		System.out.print("[ " +cc.rolld3() + " ]   ");
		System.out.print("[ " +cc.rolld4() + " ]   ");
		System.out.print("[ " +cc.rolld5() + " ]   ");
		System.out.println("\n");
		
		boolean choosing = true;
		int total =0;
		while(choosing) {
			System.out.println("Select which dice to attack with: (0 to finish)");
			int choice = in.nextInt();
			if(choice == ck.fvd1() || choice == ck.fvd2() || choice == ck.fvd3() || choice == ck.fvd4() || choice == ck.fvd5()) 
				total += choice;	
			else 
				if (choice != 0) System.out.println("You did not roll a number " + choice + " dice");
				else choosing = false;
		}
		
		boolean capture = false;
		
		while(!capture) {
		System.out.println("Your selected dice total: " + total + "\n");
		
		int victom;
		System.out.println("Select the number of the die you want to attack: ");
		victom = in.nextInt();

		if(victom == cc.fvd1() || victom == cc.fvd2() || victom == cc.fvd3() || victom == cc.fvd4() || victom == cc.fvd5()) {
			while(!capture) {
				if (total >= victom) {
					System.out.println(victom);
					if(victom == cc.fvd1()) {
						ck.setScore(cc.d12.getSides());
						System.out.println("You captured your opponant's " + cc.d12.getSides() + "-sided dice!");
						capture = true;
					}
					else {
						System.out.println("You captured your opponant's " + cc.d5.getSides() + "-sided dice!");
						ck.setScore(cc.d5.getSides());
						capture = true;
					}
					
				}
					
					else {
						System.out.println("Sorry, you cannot afford to capture this dice.");
						total = 0;
							while(!choosing) {
								System.out.println("Select which dice to attack with: (0 to finish)");
								int choice = in.nextInt();
								if(choice == ck.rolld1() || choice == ck.rolld2() || choice == ck.rolld3() || choice == ck.rolld4() || choice == ck.rolld5()) 
									total += choice;	
								else System.out.println("You did not roll a number " + choice + " dice");
								if (choice == 0) choosing = true;
							}
						System.out.println("Your selected dice total: " + total + "\n");
						System.out.println("Select the number of the die you want to attack: ");
						victom = in.nextInt();
					}
				}
			}
		
		else 
			System.out.println("Your opponant has no number " + victom + " dice");
		}
		
		System.out.println(ck.getScore());
	}

}
